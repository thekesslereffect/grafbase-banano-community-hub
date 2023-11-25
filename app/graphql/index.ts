export const getUserQuery = `
    query GetUser($email:String!){
        user(by:{email:$email}){
            id
            name
            email
            bananoAddress
            avatarUrl
            description
            githubUrl
            linkedinUrl
        }
    }
`