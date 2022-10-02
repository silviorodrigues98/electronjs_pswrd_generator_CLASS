const pass = document.querySelector( '#pass' )
const newPassword = document.querySelector( '#newPassword' )

function generatePass ()
{
    newPassword.innerHTML = ''
    if ( pass.value === '' )
    {
        alert( 'You must type the size of your password' )
        return
    }

    let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%*?"
    let password = ''

    for ( var i = 0, n = charset.length; i < pass.value; ++i )
    {
        password += charset.charAt( Math.floor( Math.random() * n ) )
    }

    console.log( password )

    let result = document.createTextNode( password )
    return newPassword.appendChild( result )
}
