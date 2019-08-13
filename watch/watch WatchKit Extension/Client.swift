import Foundation
import Safebox

class Client {
    
    static func connect() -> SafeboxSafeBox{
        return SafeboxNewSafeBox("safebox.jerson.dev:50051")!
    }
}
