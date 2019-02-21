import React, { Component } from 'react';

class Equipment extends Component {
    render() {
        return (

            <div className="page">
                <h1>
                    Equipment Page Content
                </h1>
                <div class="grid">
                    <div class="item">
                        <h1>project a</h1>
                        <button>learn more</button>
                    </div>
                    <div class="item">
                        <h1>project b</h1>
                        <button>learn more</button>
                    </div>
                    <div class="item">
                        <h1>project c</h1>
                        <button>learn more</button>
                    </div>
                    <div class="item featured">
                        <h1>project d</h1>
                        <button>learn more</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Equipment;
