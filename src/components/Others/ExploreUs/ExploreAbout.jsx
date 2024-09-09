/* eslint-disable react/no-unknown-property */

const ExploreAbout = () => {
  return (
    <div>
      <div>
        <section class="px-4 lg:container lg:mx-auto lg:max-w-[1300px] mt-10">
          <div class="">
            <div class="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
              <div class="">
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl mb-4">
                  360D Soul Ltd.
                </h2>
                <div className="text-justify">
                  <p>
                    <strong>360D Soul Ltd.</strong> is an IT Solution and
                    Consulting Firm, leading specialist in the world of
                    Information and Communications Technology (ICT), Information
                    Security (InfoSec) and Innovation Advance Solutions . We
                    offer dynamic IT services and specialized support and are
                    committed to provide comprehensive solutions & services to
                    midmarket businesses and focused strategic consulting
                    services to enterprise businesses. In short, we help dynamic
                    organizations align their IT services with their business
                    requirements.
                  </p>
                  <br></br>
                  <p>
                    <strong>360D Soul Ltd.</strong> is an IT Solution and
                    Consulting Firm, leading specialist in the world of
                    Information and Communications Technology (ICT), Information
                    Security (InfoSec) and Innovation Advance Solutions . We
                    offer dynamic IT services and specialized support and are
                    committed to provide comprehensive solutions & services to
                    midmarket businesses and focused strategic consulting
                    services to enterprise businesses. In short, we help dynamic
                    organizations align their IT services with their business
                    requirements.
                  </p>
                  <br></br>
                </div>
              </div>

              <div class="relative pl-20 pr-6 sm:pl-6 md:px-0">
                <div class="relative w-full max-w-lg mt-4 mb-10 ml-auto">
                  <img
                    class="ml-auto"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/person.jpg"
                    alt=""
                  />

                  <img
                    class="absolute -top-4 -left-12"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/wavey-lines.svg"
                    alt=""
                  />

                  <div class="absolute -bottom-10 -left-16">
                    <div class="bg-gradient-to-b from-[#000F1A] via-[#0080E5] to-[#000F1A]">
                      <div class="px-8 py-10 text-white">
                        <span class="block text-4xl font-bold lg:text-5xl">
                          {" "}
                          8+{" "}
                        </span>
                        <span class="block mt-2 text-base leading-tight">
                          {" "}
                          Years Of
                          <br />
                          Experience
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ExploreAbout;
