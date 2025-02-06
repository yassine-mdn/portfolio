import {SVGProps} from "react"

const EnIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={27}
        height={20}
        fill="none"
        {...props}
    >
        <path
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M1 18a1 1 0 0 0 1 1h10.13a1 1 0 0 0 1-1v-2.43a1 1 0 0 0-1-1H5.805v-2.367h5.743a1 1 0 0 0 1-1v-2.43a1 1 0 0 0-1-1H5.805V5.43h6.264a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1zm16.546 1a1 1 0 0 0 1-1v-7.031c0-.46.082-.786.2-1.02.13-.248.291-.411.482-.522l.003-.002c.204-.12.451-.19.772-.19.472 0 .729.14.904.34l.005.004c.193.217.351.58.351 1.218V18a1 1 0 0 0 1 1H25a1 1 0 0 0 1-1v-7.638c.005-1.07-.177-2.045-.594-2.889-.406-.833-.999-1.497-1.778-1.958-.772-.46-1.652-.671-2.604-.671-1 0-1.916.225-2.693.73A1 1 0 0 0 17.425 5H14.81a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1z"
        />
    </svg>
)
export default EnIcon;
