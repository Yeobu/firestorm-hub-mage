import { useNavigate } from 'react-router-dom'
import { useNavigationContext } from '@shared/core/contexts/Contexts'
import icons from '@shared/core/data/icons.json'
import specs from '@shared/core/data/specs.json'
import { navigateToSpec } from '@shared/core/utilities/utils'

type Props = {
  job: string
  spec: string
}

function SpecListItem({ job, spec }: Readonly<Props>) {
  const navigate = useNavigate()
  const navigationContext = useNavigationContext()
  const job_spec = `${job}-${spec}`
  const icon: string =
    icons[job as keyof typeof icons][
      spec as keyof (typeof icons)[keyof typeof icons]
    ]
  const name: string =
    specs[job as keyof typeof icons][
      spec as keyof (typeof icons)[keyof typeof icons]
    ]
  return (
    <button
      value={job_spec}
      spec-theme={job}
      onClick={() => navigateToSpec(navigate, job_spec, navigationContext)}
      className="anim bg-accent-3 text-size-4 sm:text-size-2 border-accent-1 line-clamp-1 flex flex-none flex-row items-center gap-1 rounded-md border-2 px-2 py-1 sm:px-4 sm:py-2 sm:hover:scale-[107%]"
    >
      <img
        className="h-8 w-8 rounded-sm border border-zinc-900 sm:h-6 sm:w-6"
        src={icon}
        alt={job_spec}
      />
      <div className="hidden font-bold text-zinc-900 lg:block">{name}</div>
      <div className="flex-1 font-bold capitalize text-zinc-900 lg:hidden">
        {spec}
      </div>
      <div className="h-8 w-8 sm:hidden"></div>
    </button>
  )
}

export default SpecListItem
