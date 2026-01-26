export interface HashResult {
  algorithm: string;
  hash: string;
  timestamp: string;
}

export interface FileHashResult {
  filename: string;
  size: number;
  hashes: HashResult[];
  hashId: string;
  downloadLink: string;
}

export interface VerificationResult {
  match: boolean;
  providedHash: string;
  calculatedHash: string;
  status: 'match' | 'mismatch' | 'not_provided';
  algorithm: string;
}

export interface Algorithm {
  id: string;
  name: string;
  description: string;
  secure: boolean;
  bits: number;
}
