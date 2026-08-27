import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Stage: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const stage = fileData.frontmatter?.stage

  if (!stage) {
    return null
  }

  const validStages = ["seed", "growing", "evergreen"]

  if (!validStages.includes(stage)) {
    return null
  }

  return (
    <div className={`stage stage-${stage}`}>
      {stage}
    </div>
  )
}

Stage.css = `
.stage {
  font-size: 0.8rem;
  margin: 0.5rem 0 1.5rem;
  text-transform: capitalize;
}

.stage-seed {
  color: #8a8a8a;
}

.stage-growing {
  color: #6f8f72;
}

.stage-evergreen {
  color: #4f7655;
}
`

export default (() => Stage) satisfies QuartzComponentConstructor