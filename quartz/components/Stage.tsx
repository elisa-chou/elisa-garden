import {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "./types"

const Stage: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const stage = fileData.frontmatter?.stage

  if (!stage) {
    return null
  }

  const validStages = ["seed", "growing", "evergreen"]

  if (!validStages.includes(stage)) {
    return null
  }

  const labels = {
    seed: "Seed",
    growing: "Growing",
    evergreen: "Evergreen",
  }

  return (
    <div class={`stage stage-${stage}`}>
      {labels[stage as keyof typeof labels]}
    </div>
  )
}

Stage.css = `
.stage {
  font-size: 0.8rem;
  margin: 0.5rem 0 1.5rem;
  color: var(--secondary);
}

.stage-seed {
  color: var(--gray);
}

.stage-growing {
  color: #6f8f72;
}

.stage-evergreen {
  color: #4f7655;
}
`

export default (() => Stage) satisfies QuartzComponentConstructor