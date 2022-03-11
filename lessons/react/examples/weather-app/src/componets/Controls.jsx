import { Input } from './Input'
import { Button } from './Button'

export const Controls = ({ }) => {
  return (
    <div className="controls">
      <Input placeholder="City" />
      <Input placeholder="Country" />
      <Button label="Search" />
    </div>
  )
}