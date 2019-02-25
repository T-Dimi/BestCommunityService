import React, { Component } from 'react';

class Equipment extends Component {
    render() {
        return (

            <div className="page">
                <h1 className="page-title">
                    Equipment Page Content
                </h1>
                <div class="grid">
                    <div class="item">
                        <h1>Equipment 1</h1>
                        <button>Rent Now</button>
                    </div>
                    <div class="item">
                        <h1>Equipment 2</h1>
                        <button>Rent Now</button>
                    </div>
                    <div class="item">
                        <h1>Equipment 3</h1>
                        <button>Rent Now</button>
                    </div>
                    <div class="item featured">
                        <h1>Equipment 4</h1>
                        <button>Rent Now</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Equipment;
