import React from "react";
import "../css/BookList.css";
import Book from "./Book";
import { BookContext } from "../contexts/BookContext";
import { ThemeContext } from "../contexts/ThemeContext";

class BookList extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(contextTheme) => (
          <BookContext.Consumer>
            {(contextBook) => {
              const { isDarkTheme, dark, light, changeTheme } = contextTheme
              const theme = isDarkTheme ? dark : light
              const { books } = contextBook
              return (
                <section className="page-section" style={{background: theme.bg, color: theme.txt }}  id="portfolio">
                  <div className="container">
                    <div className="text-center">
                      <h2 className="section-heading text-uppercase">
                        BookFolio
                      </h2>
                      <h3 className="section-subheading text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                      </h3>
                      <button onClick={changeTheme} type="button" className="btn btn-sm btn-info" style={{marginTop: '-70px'}}>Change Theme</button>
                    </div>
                    <div className="row">
                      {books.map((book, i) => (
                        <Book book={book} key={i} />
                      ))}
                    </div>
                  </div>
                </section>
              );
            }}
          </BookContext.Consumer>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default BookList;
