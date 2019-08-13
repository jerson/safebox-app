//
//  HostingController.swift
//  watch WatchKit Extension
//
//  Created by Gerson Alexander Pardo Gamez on 8/2/19.
//  Copyright © 2019 Gerson Alexander Pardo Gamez. All rights reserved.
//

import WatchKit
import Foundation
import SwiftUI
import Safebox

class AccountsController: WKHostingController<AccountsView> {
    

    override var body: AccountsView {
        return AccountsView(host: self)
    }
    
    func presentLogin() {
        self.presentController(withNames: ["Login"], contexts: nil)
    }
}
