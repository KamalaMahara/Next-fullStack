import postres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';

const connectionString = "postgresql://postgres.pyeujbhtgquoooxgajnk:Recipe@Sharing123@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres"

const connection = postres(connectionString);
export const db = drizzle(connection);