const Shorting = () => {
  return (
    <div className="bg-slate-400 md:w-11/12 mx-auto relative right-0 left-0 py-10 md:my-20">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">
              <h1>Looking for</h1>
            </span>
          </label>
          <select className="select select-bordered w-44">
            <option>Woman</option>
            <option>Man</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">
              <h1>Minimum Age</h1>
            </span>
          </label>
          <select className="select select-bordered w-44">
            <option>18</option>
            <option>18</option>
            <option>19</option>
            <option>20</option>
            <option>21</option>
            <option>22</option>
          </select>
        </div>
        <div>
          <h1>To</h1>
        </div>
     
        <div className="form-control">
          <label className="label">
            <span className="label-text">
              <h1>Maximum Age</h1>
            </span>
          </label>
          <select className="select select-bordered w-44">
            <option>18</option>
            <option>18</option>
            <option>19</option>
            <option>20</option>
            <option>21</option>
            <option>22</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">
              <h1>Religion</h1>
            </span>
          </label>
          <select className="select select-bordered w-44">
            <option>Islam</option>
            <option>Hindu</option>
            <option>Hindu</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">
              <h1>Profession</h1>
            </span>
          </label>
          <select className="select select-bordered w-44">
            <option>Govt. Service</option>
            <option>Private Service</option>
          </select>
        </div>
        <div className="md:pt-8">
        <button className="btn btn-sm bg-blue-900 text-white" type="submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Shorting;
