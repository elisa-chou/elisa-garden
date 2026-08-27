import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { componentRegistry } from "./quartz/components/registry"
import Stage from "./quartz/components/Stage"

componentRegistry.register("Stage", Stage, "builtin")

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()