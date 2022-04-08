import { Button as ButtonAntd, ButtonProps as ButtonPropsAntd } from 'antd'

interface ButtonProps extends ButtonPropsAntd {
  text: string
}

export const Button: React.FC<ButtonProps> = ({ text, ...props }) => <ButtonAntd {...props}>{text}</ButtonAntd>