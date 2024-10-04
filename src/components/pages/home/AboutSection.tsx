import React from "react";

const AboutSection = () => {
  return (
    <section className="py-10 ">
      <div className="container ">
        <div className="mb-4 lg:w-1/2 mx-auto ">
          <h2 className="text-3xl font-semibold text-center">About Section</h2>
          <p className="text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos,
            dolores?
          </p>
        </div>

        <div className="grid grid-cols-1 mt-6 lg:grid-cols-5 lg:gap-6 items-center">
          <div className="flex lg:col-span-3">
            <div className=" w-full border-r  pt-16">
              <div className="mr-8 border-b pb-8">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Adipisci facilis ipsam, quod autem voluptatibus suscipit
                  totam. Deleniti veniam fugiat a?
                </p>
              </div>
              <div className="mr-8 pt-8">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Adipisci facilis ipsam, quod autem voluptatibus suscipit
                  totam. Deleniti veniam fugiat a?
                </p>
              </div>
            </div>
            <div className=" w-full  ">
              <div className="ml-8 pb-8 border-b">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Adipisci facilis ipsam, quod autem voluptatibus suscipit
                  totam. Deleniti veniam fugiat a?
                </p>
              </div>
              <div className="ml-8 mt-8">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Adipisci facilis ipsam, quod autem voluptatibus suscipit
                  totam. Deleniti veniam fugiat a?
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 p-8">
            <h2 className="text-4xl ">About me</h2>
            <p className="text-gray text-base font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              doloremque amet impedit quidem architecto cumque minus provident
              nesciunt ab aliquam.
            </p>
            <p className="text-gray text-base font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              doloremque amet impedit quidem architecto cumque minus provident
              nesciunt ab aliquam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
