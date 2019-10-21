import React from 'react'

export interface HelloProps {
  name: string
}

export const Hello: React.FC<HelloProps> = ({ name }) => <div>{`Hello ${name}`}</div>
