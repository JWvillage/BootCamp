class BoardStore {
  boardId : string;
  title : string;
  content : string;
  writer : string;
  postDate : string;
  hits: number;
  flag : string;

  constructor() {
    this.boardId = "";
    this.title = "";
    this.content = "";
    this.writer = "";
    this.postDate = new Date().toLocaleString();
    this.hits = 0;
    this.flag = "";
  }
  
  static sampleData = () => {
    return {
      boardId: "1",
      title: "샘플데이터",
      content: "샘플데이터입니다.",
      writer: "관리자",
      hits: 0,
      postDate: new Date().toLocaleString(),
      flag: "notice"
    };
  }
}

export default BoardStore;

