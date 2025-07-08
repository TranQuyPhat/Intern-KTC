import React from 'react'

type Props = {}

export default function TonggleSwitch({}: Props) {
    const [isOn, setIsOn] = React.useState(false);
  return (
    <div>
        <button onClick={() => setIsOn(!isOn)}>
            {isOn ? "ON" : "OFF"}
        </button>
        <p>The switch is currently: {isOn?"On":"OFF"}</p>
    </div>
  )
}