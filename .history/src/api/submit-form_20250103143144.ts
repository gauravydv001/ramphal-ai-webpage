import type { NextApiRequest, NextApiResponse } from 'next';
import { appendToSheet } from '../../utils/googleSheets';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { type, data } = req.body;
    const result = await appendToSheet(type, data);
    res.status(200).json(result);
  } catch (error) {
    console.error('Form submission error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}