import { boot } from 'quasar/wrappers'
import {
  Quasar,
  Notify
} from 'quasar'
// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  // something to do
  app.use(Quasar, {
    plugins: {
      Notify
    },
    config: {
      notify: { /* look at QuasarConfOptions from the API card */ }
    }
  })
})
