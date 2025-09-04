const CorrespondentMessage = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/aa64612b-a2c2-4fc2-b645-b756306336a0.png" 
                alt="Secretary and Correspondent" 
                className="w-full h-auto"
              />
            </div>
            <div className="bg-college-blue text-white p-4 mt-4 rounded-lg">
              <h3 className="text-xl font-bold">Sri Vallabhaneni Buchaiah Chowdary</h3>
              <p className="text-sm">Secretary and Correspondent</p>
            </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="section-title">Correspondent's Message</h2>
            <div className="space-y-4 text-gray-700">
              <p>At Sri Velagapudi Ramakrishna Memorial College, we believe education is more than academics—it is a journey of growth, responsibility, and service. Since inception, SVRMC has been committed to value-based quality education that blends knowledge with character.</p>
              <p>With dedicated faculty, modern infrastructure, and diverse programs, we empower students to explore, innovate, and excel. Beyond academics, our focus on sports, culture, and community service nurtures leadership and holistic development.</p>
              <p>Together, let us uphold the vision of our founders and continue shaping responsible citizens and future leaders.</p>
              <p className="font-semibold">Warm regards,</p>
              <p className="font-semibold">Sri Vallabhaneni Buchaiah Chowdary</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorrespondentMessage;