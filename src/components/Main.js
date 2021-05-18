import React from 'react'

export default function Main(props) {
  return (
    <tbody>
      <tr>
        <td>
          <img src={props.imgSrc} alt="user img" />
        </td>
        <td>{props.firstName}</td>
        <td>{props.lastName}</td>
        <td>{props.phoneNumber}</td>
        <td>{props.email}</td>
        <td>{props.userName}</td>
      </tr>
    </tbody>
  )
}
