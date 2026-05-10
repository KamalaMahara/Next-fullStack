import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';

const connectionString = "postgresql://postgres.pyeujbhtgquoooxgajnk:PasswordIsRecipeSharing@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres"

export const connection = postgres(connectionString);
export const db = drizzle(connection);