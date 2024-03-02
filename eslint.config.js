import antfu from '@antfu/eslint-config'
import eslintConfigPrettier from 'eslint-config-prettier'

export default antfu(
  {
    stylistic: false,
  },
  eslintConfigPrettier,
)
