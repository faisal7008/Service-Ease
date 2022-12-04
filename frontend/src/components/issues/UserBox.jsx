export default function UserBox({ user }) {
  return (
    <div>
      <div className="inline-flex items-center space-x-3">
        <img
          className="w-7 h-7 rounded-full"
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
          alt="Neil image"
        />
        <div className="grid grid-cols-1 place-items-start">
          <p className="text-sm font-medium text-gray-900 truncate ">
            {user.name}
          </p>
          <p className="text-xs text-gray-600 truncate ">{user.email}</p>
        </div>
      </div>
    </div>
  );
}
