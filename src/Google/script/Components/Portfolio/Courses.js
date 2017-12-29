import React, { Component } from 'react';
import '../../../css/Portfolio/Portfolio.css';
import '../../../css/Portfolio/Courses.css';
import PortfolioStore from '../../Stores/PortfolioStore';

import BlockTitle from "./BlockTitle";
import Course from "./Course";

class Courses extends Component {
    constructor(props) {
        super(props);

        this.state = {
            coursesList: []
        };

        this.updateCoursesList = this.updateCoursesList.bind(this);
    }

    updateCoursesList() {
        this.setState({
            coursesList: PortfolioStore.getAllCourses()
        });
    }

    componentWillMount() {
        PortfolioStore.on('data changed', this.updateCoursesList);
        this.updateCoursesList();
    }

    componentWillUnmount() {
        PortfolioStore.removeListener('data changed', this.updateCoursesList);
    }

    render() {
        return (
            <section className='portfolio-courses'>
                <div className='container'>
                    <BlockTitle mainTitle='Курсы на loftblog' subtitle='которые мне помогут в выполениении этого задания'/>
                    <div className='portfolio-courses-container'>
                        {this.state.coursesList.map((item) => {
                            return <Course key={item.id} data={item}/>
                        })}
                    </div>
                </div>
                <div className='clr'/>
            </section>
        );
    }
}

export default Courses;