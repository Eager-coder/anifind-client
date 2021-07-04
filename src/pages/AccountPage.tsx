import { useContext, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import styled from "styled-components"
import Favorites from "../components/Account/Favorites"
import Sidebar from "../components/Account/Sidebar"
import Profile from "../components/Account/Profile"
import Comments from "../components/Account/Comments"
import Discussions from "../components/Account/Discussions"
import Settings from "../components/Account/Settings/Settings"
import Social from "../components/Account/Social"
import { UserContext } from "../context/UserContext"
import LoadingSpinner from "../components/LoadingSpinner"

export default function User() {
	const { category } = useParams<{ category: string }>()
	const history = useHistory()
	const { isLoading, isLoggedIn } = useContext(UserContext).user

	useEffect(() => {
		if (!isLoggedIn && !isLoading) {
			history.push("/login")
		}
	}, [isLoggedIn, isLoading])
	if (isLoading) return <LoadingSpinner />
	return (
		<Container>
			<div className="flex">
				<Sidebar category={category} />
				{category === "profile" && <Profile />}
				{category === "favorites" && <Favorites />}
				{category === "comments" && <Comments />}
				{category === "discussions" && <Discussions />}
				{category === "settings" && <Settings />}
				{category === "social" && <Social />}
			</div>
		</Container>
	)
}

const Container = styled.div`
	max-width: 1200px;
	padding: 0 50px;
	margin: 50px auto;
	.flex {
		display: flex;
	}
	img.avatar {
		width: 100px;
	}
	.preview-img {
		height: 200px;
	}
	h1 {
		margin-bottom: 20px;
	}
	h2 {
		margin-bottom: 15px;
	}
	@media (max-width: 768px) {
		padding: 0 20px;
		margin: 20px auto;
		.flex {
			display: block;
		}
	}
`
