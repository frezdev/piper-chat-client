import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'
import { ENV } from './constants'

export const supabase = createClient(ENV.SUPABASE_URL, ENV.SUPABASE_API_KEY)

export async function uploadFile (file, path) {
  try {
    const { data, error } = await supabase.storage
      .from('uploads')
      .upload(`${path}/${Date.now()}-${file.name}`, file.data)

    if (error) throw error
    return data
  } catch (error) {
    throw error.message
  }
}
