
export default function profileCard({profileImage, firstName, lastName, email, socialMediaLinks}) {
    return (
        <div>
            <img src={profileImage} alt={firstName +'' + lastName} />
            <h2>{firstName} {lastName}</h2>
            <a>{email}</a>
        </div>
    )
}
