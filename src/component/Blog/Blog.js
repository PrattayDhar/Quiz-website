import React from 'react';

const Blog = () => {
    return (
        <div>
            <section class="container mb-5">
                <div class="text-center me-lg-5 ms-lg-5 ps-lg-5 pe-lg-5 pt-5">
                    <h1>WellCome To Blog</h1>
                </div>

                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Difference between var, let and const keywords in JavaScript
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                The scope of a var variable is functional scope. The scope of a let variable is block scope.
                                The scope of a const
                                variable is block scope. It can be updated and re-declared into the scope.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                The Difference Between Regular Functions and Arrow Functions
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Unlike regular functions, arrow functions do not have their own this . The value of this
                                inside an arrow function
                                remains the same throughout the lifecycle of the function and is always bound to the value
                                of this in the closest
                                non-arrow parent function.

                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Differences betweenforEach, map, filter, and find.
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                The main difference between forEach and filter is that forEach just loop over the array and
                                executes the callback but
                                filter executes the callback and check its return value. If the value is true element
                                remains in the resulting array but
                                if the return value is false the element will be removed for the resulting array.
                                difference between forEach and filter is that forEach just loop over the array and executes
                                the callback but filter
                                executes the callback and check its return value. If the value is true element remains in
                                the resulting array but if the
                                return value is false the element will be removed for the resulting array.

                            </div>
                        </div>
                    </div>

</div>

            </section>
        </div>
    );
};

export default Blog;