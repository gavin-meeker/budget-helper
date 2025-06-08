import { styled } from '@mui/material/styles'
import Button, { type ButtonProps } from '@mui/material/Button'

type RemainingAmountProps = {
    amount: number
}
const RemainingAmount = ({ amount }: RemainingAmountProps) => {
    console.log(amount)
    const Component = styled(Button)<ButtonProps>(({ theme }) => ({
        cursor: 'default',
        boxShadow: 'none',
        color: 'white',
        textTransform: 'none',
        fontSize: 16,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#0063cc',
        borderColor: '#0063cc',
    }))
    return <Component>Remaining Amount: {amount}</Component>
}

export default RemainingAmount
