export function Header(){
    return (
    <div className="bg-base-300">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl text-primary">NekoSync</a>
        </div>
      
        <div className="navbar-center">
        </div>

        <div className="navbar-end">
          <ul className="nav flex">
            <li><a href="" className="active">Home</a></li>
            <li><a href="">Browse</a></li>
            <li><a href="">Details</a></li>
            <li><a href="">Streams</a></li>
            <li><a href="">Profile</a></li>
          </ul> 
        </div>
      </div>
    </div>
    )
}