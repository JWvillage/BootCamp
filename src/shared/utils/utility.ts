export function validate (e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target
    const { name } = e.target
    const validation = document.getElementById(`${ name }_check`)
    if (validation !== null && value !== null) {
        let pass: RegExp;
        const id = /^\w{6,12}$/
        const password = /^.*(?=^.{8,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/
        const birth = /^\d{4}-\d{2}-\d{2}$/
        const email = /^\w+@[a-z]+\.[a-z]$/
        if ( name === "memberId" ) {
            pass = id
        } else if ( name === "memberPass" ) {
            pass = password
        } else if ( name === "memberBirthday" ) {
            pass = birth
        } else if ( name === "memberEmail" ) {
            pass = email
        } else {
            pass = /^$/
        }
        if (pass.test(value)) {
            validation.innerHTML = "사용 가능합니다.";
            validation.removeAttribute('style')
            document.getElementById(`${ name }_sort`)?.setAttribute('src', '/image/openIcon.png');
        } else {
            validation.innerHTML = "사용 불가합니다.";
            validation.setAttribute('style', 'color: red');
            document.getElementById(`${ name }_sort`)?.setAttribute('src', '/image/lockIcon.png');
        }
    }
}