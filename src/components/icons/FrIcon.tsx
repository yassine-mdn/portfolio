import {SVGProps} from "react"

const FrIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={20}
        fill="none"
        {...props}
    >
        <path
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M1 18a1 1 0 0 0 1 1h2.898a1 1 0 0 0 1-1v-5.797h5.649a1 1 0 0 0 1-1v-2.43a1 1 0 0 0-1-1H5.898V5.43h6.352a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1zm12.594 0a1 1 0 0 0 1 1h2.828a1 1 0 0 0 1-1v-7.055c0-.351.079-.62.209-.837a1.46 1.46 0 0 1 .578-.548l.003-.002c.25-.136.547-.214.913-.214q.284 0 .6.044l.023.003q.171.021.269.04c.07.014.095.022.092.021a1 1 0 0 0 1.328-.944V5.906a1 1 0 0 0-.803-.98 4.5 4.5 0 0 0-.622-.072 8 8 0 0 0-.59-.026c-.814 0-1.57.21-2.24.638A1 1 0 0 0 17.335 5h-2.742a1 1 0 0 0-1 1z"
        />
    </svg>
)
export default FrIcon;