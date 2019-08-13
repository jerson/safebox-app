import Foundation
import Safebox

class Client {
    
    static let instance = SafeboxNewSafeBox("safebox.jerson.dev:50051")!
    static func connect() -> SafeboxSafeBox{
        return instance
    }
}
