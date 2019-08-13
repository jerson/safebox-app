//
//  AccountsView.swift
//  watch WatchKit Extension
//
//  Created by Gerson Alexander Pardo Gamez on 8/2/19.
//  Copyright © 2019 Gerson Alexander Pardo Gamez. All rights reserved.
//

import SwiftUI

struct AccountsView: View {
    
    var body: some View {
        ScrollView {
         VStack {
            Text("SafeBox")
            }
        }
    }
}

#if DEBUG
struct AccountsView_Previews: PreviewProvider {
    static var previews: some View {
        AccountsView()
    }
}
#endif
