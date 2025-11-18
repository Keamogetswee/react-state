import chefClaudeIcon from '../assets/Chef Claude Icon.png'

export default function Header() {
  return (
    <div className="header">
        <img src={chefClaudeIcon} className="header--logo" />
        <h2 className="header--title">Chef Claude</h2>
    </div>
  )
}