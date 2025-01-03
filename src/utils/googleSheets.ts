import { google } from 'googleapis';

type FormType = 'waitlist' | 'feedback' | 'contact';

interface FormData {
  waitlist: { email: string };
  feedback: { type: string; account: string; message: string };
  contact: { name: string; email: string; message: string };
}

export async function appendToSheet<T extends string>(formType: T, data: any) {
  // Verify environment variables
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY;

  if (!spreadsheetId || !clientEmail || !privateKey) {
    throw new Error('Missing required environment variables');
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const timestamp = new Date().toISOString();
    const values = [timestamp, ...Object.values(data)];

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${formType}!A:${String.fromCharCode(65 + values.length)}`,
      valueInputOption: 'RAW',
      requestBody: { values: [values] }
    });

    return response.data;
  } catch (error) {
    console.error(`Failed to append ${formType} data:`, error);
    throw new Error('Failed to save data');
  }
}