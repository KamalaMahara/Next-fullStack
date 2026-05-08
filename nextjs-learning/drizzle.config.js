import {defineConfig} from 'drizzle-kit';

//migration files will be generated in the drizzle folder

export default defineConfig({
  schema:"./src/db/schema.js",
  out:"./drizzle",
  dialect:"postgresql",
  dbCredentials:{
     "DATABASE_URL":"postgresql://postgres.pyeujbhtgquoooxgajnk:Recipe@Sharing123@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres"
  }
})