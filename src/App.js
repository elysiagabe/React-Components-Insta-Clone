/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, {useState} from "react";
import "./App.css";
// import the PostsPage and SearchBar and add them to the App"
import PostsPage from "./components/PostsContainer/PostsPage";
import SearchBar from "./components/SearchBar/SearchBarContainer";
import dummyData from "./dummy-data";


const App = () => {

  // search bar state
  const [searchTerm, setSearchTerm] = useState("");
  // data state
  const [data, setData] = useState(dummyData);
  console.log("data: ", data);
  // search results state
  const [searchResults, setSearchResults] = useState(data);

  // search bar event
  const handleChange = event => {
    const queryString = event.target.value
    setSearchTerm(queryString);
    setSearchResults(data.filter(post => post.username.toLowerCase().includes(queryString.toLowerCase())));
  }


  // moves up incrementLikes function...
  const incrementLikes = post => {
    const newData = data.map(p => {
      if (p.id === post.id) {    
        post.likes++;
        return post;
      } else {
        return p;
      }
    });
    setData(newData);
  }

  

  return (
    <div className="App">
      {/* Add imported components here to render them */}
      <SearchBar searchTerm={searchTerm} handleChange={handleChange}/>
      <PostsPage searchResults={searchResults} incrementLikes={incrementLikes}/>
    </div>
  );
};

export default App;
