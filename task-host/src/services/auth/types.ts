import { EmailOtpType } from '@supabase/supabase-js';

export interface AuthConfirmQueryParams {
    token_hash: string;
    type: EmailOtpType;
}
