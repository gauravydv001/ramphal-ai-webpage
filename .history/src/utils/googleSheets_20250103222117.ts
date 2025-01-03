import { google } from 'googleapis';

type FormType = 'waitlist' | 'feedback' | 'contact';

interface FormData {
  waitlist: { email: string };
  feedback: { type: string; account: string; message: string };
  contact: { name: string; email: string; message: string };
}

const sheets = google.sheets({ 
  version: 'v4', 
  auth: new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  })
});

export async function appendToSheet<T extends FormType>(
  formType: T, 
  data: FormData[T]
) {
  try {
    const timestamp = new Date().toISOString();
    const values = [timestamp, ...Object.values(data)];

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range: `${formType}!A:${String.fromCharCode(65 + values.length)}`,
      valueInputOption: 'RAW',
      requestBody: { values: [values] }
    });
  } catch (error) {
    console.error(`Failed to append ${formType} data:`, error);
    throw new Error('Failed to save data');
  }
}