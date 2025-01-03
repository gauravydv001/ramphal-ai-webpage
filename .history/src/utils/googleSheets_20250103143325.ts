import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

const SCOPES = [
  'https://www.googleapis.com/auth/spreadsheets',
];

const jwt = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  scopes: SCOPES,
});

const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID!, jwt);

export const appendToSheet = async (type: string, data: any) => {
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];
  const timestamp = new Date().toISOString();

  const row = {
    timestamp,
    type,
    ...data
  };

  await sheet.addRow(row);
  return row;
};

export interface FormData {
    name?: string;
    email: string;
    message?: string;
    type: 'contact' | 'waitlist' | 'feedback';
  }