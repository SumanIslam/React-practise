import React, { Component } from "react";

class CopyDemo extends Component {
  handleCopy() {
    console.log("Don't you dare copy!");
  };
  render() {
    return (
      <div>
        <h3>Try copying some thing code!</h3>
        <section
          style={{ width: "300px", display: "inline-block" }}
          onCopy={this.handleCopy}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
          quaerat quo facilis praesentium animi perferendis, id quidem
          consequuntur necessitatibus, suscipit perspiciatis corporis possimus
          similique voluptates ducimus sit velit cum modi! Ab, illo. Autem quod
          impedit rerum modi aliquid, laboriosam molestiae hic sapiente, facere
          cupiditate deleniti, libero placeat aperiam odio vero?
        </section>
      </div>
    );
  }
}

export default CopyDemo;
