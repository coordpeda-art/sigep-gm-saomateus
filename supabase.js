// SIGEP-GM - SAO MATEUS/ES
// Coordenacao Pedagogica
// Conexao com o Supabase

import { createClient } from
  'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL =
  'https://jqjlxfoajnvwozpduugy.supabase.co';

const SUPABASE_KEY =
  'sb_publishable_niUJJ8bVx9_MpxRutEuJzQ_uc8ourJP';

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
