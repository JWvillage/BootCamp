class MemberStore {
  memberId : string;
  memberPass : string;
  memberName : string;
  memberEmail : string;
  memberAddress : string;
  memberPhone : string;
  memberBirthday : string;
  memberGender : string;

  constructor() {
    this.memberId = "";
    this.memberPass = "";
    this.memberName = "";
    this.memberEmail = "";
    this.memberAddress = "";
    this.memberPhone = "";
    this.memberBirthday = "";
    this.memberGender = "";
  }

}

export default MemberStore;