//
//  AccountsView.swift
//  watch WatchKit Extension
//
//  Created by Gerson Alexander Pardo Gamez on 8/2/19.
//  Copyright © 2019 Gerson Alexander Pardo Gamez. All rights reserved.
//

import SwiftUI
import Safebox

struct AccountsView: View {
    
    let host: AccountsController!
    @State var accounts = SafeboxAccountSingleCollection()
    @State var total = 0
    
    var body: some View {
        
        List {
            ForEach(0..<self.total) { index in
                NavigationLink(destination: AccountView(account: self.accounts.at(index)!)) {
                    AccountSingleView(account: self.accounts.at(index)!)
                                          }
                       }
        
            }.onAppear(
                perform: {
                    do{
                        let response = try Client.connect().getAccounts()
        
                        self.accounts  = response
                        self.total = self.accounts.count()
                        
                    }catch let e {
                        print("error \(e.localizedDescription)")
                    }

            }
        ).navigationBarTitle(Text("Accounts"))
    }
}



#if DEBUG
struct AccountsView_Previews: PreviewProvider {
    static var previews: some View {
        AccountsView(host: nil, accounts: SafeboxAccountSingleCollection())
    }
}
#endif
