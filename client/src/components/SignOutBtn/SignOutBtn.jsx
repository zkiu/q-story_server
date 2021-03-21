import {useHistory} from 'react-router-dom'
import {signOut} from '../../services/auth/signOut'

export default function SignOutBtn() {
	let history = useHistory()

	function handleClick(e) {
		e.preventDefault()
		history.push('/')
		signOut()
			.then((result) => {
				// TODO: add toast
				alert('You have been signed out')
			})
			.catch((error) => {
				alert(error)
			})
	}

	return (
		<>
			<button type="button" className="mybtn" onClick={handleClick}>
				Sign Out
			</button>
		</>
	)
}
