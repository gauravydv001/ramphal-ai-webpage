import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

interface WaitlistData {
  email: string;
}

interface FeedbackData {
  type: 'Bug Report' | 'Feature Request' | 'Complaint';
  account: string;
  message: string;
}

interface ContactData {
  name: string;
  email: string;
  message: string;
}

type SheetData = WaitlistData | FeedbackData | ContactData;

interface SheetRow {
  timestamp: string;
  type: 'waitlist' | 'feedback' | 'contact';
  [key: string]: string;
}

const SCOPES = [
  'https://www.googleapis.com/auth/spreadsheets',
];

const jwt = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  scopes: SCOPES,
});

const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID!, jwt);

export const appendToSheet = async (
  type: 'waitlist' | 'feedback' | 'contact', 
  data: SheetData
): Promise<void> => {
  try {
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    
    const row: SheetRow = {
      timestamp: new Date().toISOString(),
      type,
      ...(data as unknown as Record<string, string>)
    };

    await sheet.addRow(row);
  } catch (error) {
    console.error('Failed to append to sheet:', error);
    throw new Error('Failed to save data');
  }
};