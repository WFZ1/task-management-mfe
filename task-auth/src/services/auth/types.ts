import { EmailOtpType } from '@supabase/supabase-js';

export interface AuthData {
    email: string;
    password: string;
}

export interface AuthConfirmQueryParams {
    token_hash: string;
    type: EmailOtpType | null;
}
